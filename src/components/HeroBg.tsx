"use client";

import React, { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  type: "transformer" | "blockchain" | "quant";
  opacity: number;
  size: number;
  pulse: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const TRANSFORMER_LABELS = [
  "Multi-Head\nAttention",
  "Add & Norm",
  "Feed\nForward",
  "Softmax",
  "Positional\nEncoding",
  "Masked\nAttention",
  "Linear",
  "Embedding",
];

const BLOCKCHAIN_LABELS = [
  "Hash",
  "Public Key",
  "Sign →",
  "Verify →",
  "Signature",
  "Private Key",
  "Block #n",
  "Merkle Root",
];

const QUANT_LABELS = [
  "∂P/∂σ",
  "α=0.02",
  "β₁=0.9",
  "VWAP",
  "Sharpe",
  "Δ=0.63",
  "RSI",
  "θ=0.14",
];

const COLORS = {
  transformer: "#00e5ff",   // cyan
  blockchain: "#f7931a",   // bitcoin orange
  quant: "#39ff14",   // matrix green
  bg: "#050b14",
};

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    let tick = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const buildNodes = () => {
      const W = canvas.width;
      const H = canvas.height;
      nodes = [];

      const pushGroup = (
        labels: string[],
        type: Node["type"],
        xRange: [number, number],
        yRange: [number, number]
      ) => {
        labels.forEach((label) => {
          const x = xRange[0] + Math.random() * (xRange[1] - xRange[0]);
          const y = yRange[0] + Math.random() * (yRange[1] - yRange[0]);
          nodes.push({
            x: x * W,
            y: y * H,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            label,
            type,
            opacity: 0.55 + Math.random() * 0.35,
            size: 60 + Math.random() * 48,
            pulse: Math.random() * Math.PI * 2,
          });
        });
      };

      // transformer nodes — left strip only
      pushGroup(TRANSFORMER_LABELS, "transformer", [0.01, 0.27], [0.15, 0.95]);
      // blockchain nodes — right strip only
      pushGroup(BLOCKCHAIN_LABELS, "blockchain", [0.73, 0.99], [0.15, 0.95]);
      // quant labels — corners only (top-left + bottom-right)
      const half = Math.floor(QUANT_LABELS.length / 2);
      pushGroup(QUANT_LABELS.slice(0, half), "quant", [0.01, 0.26], [0.15, 0.38]);
      pushGroup(QUANT_LABELS.slice(half), "quant", [0.74, 0.99], [0.62, 0.99]);
    };

    resize();
    buildNodes();
    window.addEventListener("resize", () => { resize(); buildNodes(); });

    // Spawn a travelling particle along an edge occasionally
    const spawnParticle = () => {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      const color = COLORS[a.type];
      const steps = 60 + Math.random() * 80;
      const dx = (b.x - a.x) / steps;
      const dy = (b.y - a.y) / steps;
      particles.push({ x: a.x, y: a.y, vx: dx, vy: dy, life: steps, maxLife: steps, color });
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      tick++;

      // ── background
      ctx.fillStyle = "rgba(5, 11, 20, 0.55)";
      ctx.fillRect(0, 0, W, H);

      // ── draw edges between nearby same-type nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.type !== b.type) continue;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const maxDist = 220;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = COLORS[a.type] + Math.round(alpha * 255).toString(16).padStart(2, "0");
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // ── draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(tick * 0.018 + n.pulse) * 0.18 + 0.82;
        const color = COLORS[n.type];

        // gradient glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 0.7 * pulse);
        grad.addColorStop(0, color + "22");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 0.7 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // box
        const boxW = n.size + 8;
        const boxH = 28;
        const bx = n.x - boxW / 2;
        const by = n.y - boxH / 2;
        ctx.strokeStyle = color + Math.round(n.opacity * 0.85 * 255).toString(16).padStart(2, "0");
        ctx.lineWidth = 1;
        ctx.strokeRect(bx, by, boxW, boxH);

        // small fill
        ctx.fillStyle = color + "14";
        ctx.fillRect(bx, by, boxW, boxH);

        // text
        ctx.fillStyle = color + Math.round(n.opacity * 255).toString(16).padStart(2, "0");
        ctx.font = `bold 8px 'Geist Mono', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const lines = n.label.split("\n");
        if (lines.length > 1) {
          ctx.fillText(lines[0], n.x, n.y - 5);
          ctx.fillText(lines[1], n.x, n.y + 5);
        } else {
          ctx.fillText(n.label, n.x, n.y);
        }

        // move
        n.x += n.vx;
        n.y += n.vy;

        // ── Navbar safe-zone: prevent nodes from overlapping the fixed header
        const navbarSafeY = 100;
        if (n.y < navbarSafeY) {
          n.vy += 0.15; // push down
          n.vy = Math.min(1.2, n.vy); // cap downward speed
        }

        // ── Centre safe-zone: repel nodes away from the text area
        // Safe zone: x in [30%, 70%] of width, y in [15%, 85%] of height
        const safeX1 = W * 0.30;
        const safeX2 = W * 0.70;
        const safeY1 = H * 0.15;
        const safeY2 = H * 0.85;
        if (n.x > safeX1 && n.x < safeX2 && n.y > safeY1 && n.y < safeY2) {
          // push toward the nearest horizontal edge
          const distLeft = n.x - safeX1;
          const distRight = safeX2 - n.x;
          if (distLeft < distRight) {
            n.vx -= 0.12; // push left
          } else {
            n.vx += 0.12; // push right
          }
          // cap speed
          n.vx = Math.max(-1.2, Math.min(1.2, n.vx));
          n.vy = Math.max(-1.2, Math.min(1.2, n.vy));
        }

        // wall bounce
        if (n.x < 20 || n.x > W - 20) n.vx *= -1;
        if (n.y < 20 || n.y > H - 20) n.vy *= -1;
        if (n.y < navbarSafeY) { // Extra check for top boundary relative to navbar
          // If somehow forced above, ensure it reflects back down properly
          if (n.vy < 0) n.vy *= -1;
        }
      });

      // ── draw / move particles
      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        const alpha = p.life / p.maxLife;
        ctx.fillStyle = p.color + Math.round(alpha * 200).toString(16).padStart(2, "0");
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
      });

      // spawn particles periodically
      if (tick % 18 === 0) spawnParticle();

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", () => { resize(); buildNodes(); });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

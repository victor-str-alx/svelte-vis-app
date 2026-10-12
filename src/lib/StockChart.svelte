<script>
  const labels = ['Luni', 'Marți', 'Mie', 'Joi', 'Vin', 'Sâm', 'Dum'];
  const prices = [100, 102, 98, 105, 108, 106, 112];

  const w = 560;
  const h = 280;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const minY = Math.min(...prices) - 5;
  const maxY = Math.max(...prices) + 5;
  const stepX = chartW / (prices.length - 1) || 1;

  function x(i) {
    return padding.left + i * stepX;
  }
  function y(val) {
    return padding.top + chartH - ((val - minY) / (maxY - minY)) * chartH;
  }

  const points = prices.map((val, i) => `${x(i)},${y(val)}`).join(' ');
  const gridLines = [98, 100, 102, 105, 108].filter((v) => v >= minY && v <= maxY);
</script>

<div class="chart-wrap">
  <h3 class="chart-title">Evoluție preț acțiune (date exemplu)</h3>
  <div class="chart-inner">
    <svg viewBox="0 0 {w} {h}" class="chart-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(34, 197, 94, 0.35)" />
          <stop offset="100%" stop-color="rgba(34, 197, 94, 0)" />
        </linearGradient>
      </defs>
      <!-- Grid -->
      {#each gridLines as g}
        <line x1={padding.left} y1={y(g)} x2={w - padding.right} y2={y(g)} class="grid-line" />
        <text x={padding.left - 8} y={y(g)} class="grid-label" text-anchor="end" dominant-baseline="middle">{g}</text>
      {/each}
      <!-- Area under line -->
      <polygon
        points="{padding.left},{padding.top + chartH} {points} {w - padding.right},{padding.top + chartH}"
        fill="url(#lineGrad)"
      />
      <!-- Line -->
      <polyline points={points} fill="none" class="chart-line" stroke-width="2" />
      <!-- Points -->
      {#each prices as val, i}
        <circle cx={x(i)} cy={y(val)} r="4" class="chart-point" />
      {/each}
      <!-- X labels -->
      {#each labels as label, i}
        <text x={x(i)} y={h - 8} class="axis-label" text-anchor="middle">{label}</text>
      {/each}
      <!-- Y axis label -->
      <text x={w / 2} y={h - 0} class="axis-title" text-anchor="middle">Ziua</text>
      <text x={20} y={h / 2} class="axis-title-y" text-anchor="middle" transform="rotate(-90 20 {h/2})">Preț (RON)</text>
    </svg>
  </div>
  <p class="chart-legend"><span class="legend-dot"></span> Preț acțiune (RON)</p>
</div>

<style>
  .chart-wrap {
    width: 100%;
    max-width: 600px;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid var(--border);
    background: var(--card);
  }
  .chart-title {
    color: var(--text);
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }
  .chart-inner {
    width: 100%;
    height: auto;
  }
  .chart-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .grid-line {
    stroke: #27272a;
    stroke-width: 1;
  }
  .grid-label {
    fill: #71717a;
    font-size: 11px;
  }
  .chart-line {
    stroke: #22c55e;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .chart-point {
    fill: #22c55e;
    stroke: #0f0f12;
    stroke-width: 2;
  }
  .axis-label {
    fill: #71717a;
    font-size: 11px;
  }
  .axis-title {
    fill: #71717a;
    font-size: 12px;
  }
  .axis-title-y {
    fill: #71717a;
    font-size: 12px;
  }
  .chart-legend {
    margin: 1rem 0 0 0;
    font-size: 0.875rem;
    color: #a1a1aa;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .legend-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #22c55e;
  }
</style>

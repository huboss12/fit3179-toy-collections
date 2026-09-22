// Toy collections — chart loader
// One entry per chart. Paths must match the files in specs/ exactly.

const charts = [
  ['#vis1',  'specs/01_choropleth.json'],
  ['#vis2',  'specs/02_bump.json'],
  ['#vis3',  'specs/03_connected.json'],
  ['#vis4',  'specs/04_flowmap.json'],
  ['#vis5',  'specs/05_streamgraph.json'],
  ['#vis6',  'specs/06_symbolmap.json'],
  ['#vis7',  'specs/07_heatmap.json'],
  ['#vis8',  'specs/08_spikemap.json'],
  ['#vis9',  'specs/09_slope.json'],
  ['#vis10', 'specs/10_ridgeline.json'],
  ['#vis11', 'specs/11_violin.json'],
  ['#vis12', 'specs/12_waffle.json']
];

// Shared options for every chart.
// Only the chart *titles* use the page's display face. Axis labels, legends and
// annotations keep the default sans-serif, because every label position in the
// specs was tuned against those font metrics — a wider font would reintroduce overlaps.
const options = {
  actions: false,
  renderer: 'svg',
  config: {
    background: null,
    title: {
      font: 'Bricolage Grotesque, Arial Narrow, sans-serif',
      fontWeight: 700,
      color: '#1c2126',
      subtitleColor: '#5a626b',
      offset: 10
    }
  }
};

// Wait for web fonts before drawing, so Vega measures titles with the real font.
document.fonts.ready.then(() => {
  for (const [target, spec] of charts) {
    vegaEmbed(target, spec, options).catch(err => {
      console.error(`Could not draw ${spec}:`, err);
      const el = document.querySelector(target);
      if (el) el.textContent = `This chart could not be loaded (${spec}).`;
    });
  }
});

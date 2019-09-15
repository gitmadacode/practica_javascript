// En este caso usaremos en vez de alert viejo , sweet alerts

function prueba(){
  Swal.fire({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '3em',
    background: '#fff url("https://camo.githubusercontent.com/6114806ddab4522365da88055873c0781a59fc85/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f796779337347497071694966545a50716e452f67697068792e676966")',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://thumbs.gfycat.com/GraciousUnsteadyAmurstarfish-size_restricted.gif")
      center left
      no-repeat
    `
  })
};
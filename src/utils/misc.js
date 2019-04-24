export function getBackgroundColor(){
  const colors = ['#00ff99', '#00cbff', '#fff35c', '#fe6667', '#9933ff']
  return colors[Math.floor(Math.random() * colors.length)]
}
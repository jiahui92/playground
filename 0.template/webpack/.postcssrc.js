module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-px2rem')({
      remUnit: 75 // 设计图宽度/10
    })
  ]
}

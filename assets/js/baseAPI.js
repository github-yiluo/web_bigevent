// 注意：每次调用 $.get() 获取 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给 Ajax 提供的配置对象
$.ajaxPrefilter(function(options) {
  options.url = 'http://127.0.0.1:3007' + options.url
  console.log(options.url)
})
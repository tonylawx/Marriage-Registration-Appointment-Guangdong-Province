//搜索可预约日期
var date = document.querySelector('#yyrq')
date.value = ''
//2023-06-03 预约日期
date.dispatchEvent(new Event('change'))

var area = document.querySelector('.inputtext')
area.value = ''
//440300000000 预约城市
area.dispatchEvent(new Event('change'))

document.querySelector('.querybtn').dispatchEvent(new Event('click'))

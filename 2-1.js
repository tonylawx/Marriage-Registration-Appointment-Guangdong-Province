//预选香蜜湖以及最晚日期
// var element = document.querySelector('input[type="radio"][id="djjg"][value="4403080A1000"]');
var element = document.querySelector('input[type="radio"][id="djjg"][value="4403040A1000"]');
element.click()
setTimeout(()=>{
        var inputs = document.querySelectorAll('#yysj')
        var input = inputs[inputs.length - 1]
        input.click()
        document.querySelector('.btn_1').click()

    }
    , 300)

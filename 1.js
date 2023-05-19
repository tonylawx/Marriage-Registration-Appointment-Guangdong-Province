//表单 1 自动填写
function setValueWithDelay(element, value, delay) {
    if (delay === 0) {
        element.value = value;
        element.dispatchEvent(new Event('change'));
        return Promise.resolve();
    }

    return new Promise((resolve)=>{
            setTimeout(()=>{
                    element.value = value;
                    element.dispatchEvent(new Event('change'));
                    resolve();
                }
                , delay);
        }
    );
}

async function setValues() {
    const cn = document.querySelector('#area_citynan');
    const arean = document.querySelector('#area_countynan');
    const areatn = document.querySelector('#area_townnan');
    const fjdnan = document.querySelector('#fjdnan');
    const cnv = document.querySelector('#area_citynv');
    const areanv = document.querySelector('#area_countynv');
    const areatnv = document.querySelector('#area_townnv');
    const fjdnanv = document.querySelector('#fjdnv');

    await setValueWithDelay(cn, '', 0);
    //男城市
    await setValueWithDelay(arean, '', 200);
    //男区
    await setValueWithDelay(areatn, '', 200);
    //男街道

    fjdnan.value = '';
    //男户籍地址
    cnv.value = '';
    //女城市
    cnv.dispatchEvent(new Event('change'));

    await setValueWithDelay(areanv, '', 200);
    //女区
    await setValueWithDelay(areatnv, '', 200);
    //女街道

    fjdnanv.value = '';
    //女户籍地址

    setTimeout(()=>{
            document.querySelector('.btn_1').click();
        }
        , 800);
}

setValues();

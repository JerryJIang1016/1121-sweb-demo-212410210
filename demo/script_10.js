function showdemo(week){
    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(week){
        case 2:
            p.innerHTML =  `<iframe src="./w02_10_intro/index.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML =  `<iframe src="./w03_10_card/index.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML =  `<iframe src="./w04_10_blog/index.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML =  `<iframe src="./w05_10_blog/index.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML =  `<iframe src="./w06_10_navbar/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./w07_10_tile/index.html" width="100%" height="100%" />`;
            break;
    }
}
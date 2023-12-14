function showdemo(week){
    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(week){
        case 2:
            p.innerHTML =  `<iframe src="./demo/w02_10_intro/index.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML =  `<iframe src="./demo/w03_10_card/index.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML =  `<iframe src="./demo/w04_10_blog/index.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML =  `<iframe src="./demo/w05_10_blog/index.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML =  `<iframe src="./demo/w06_10_navbar/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./demo/w07_10_tile/index.html" width="100%" height="100%" />`;
            break;
        case 13:
            p.innerHTML = `<iframe src="./demo/w13_portfolio_10/index.html" width="100%" height="100%" />`;
            break;
    }
}
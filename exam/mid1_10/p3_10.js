function showPage(week){
    const p = document.querySelector('.show-mid1-answer');
    console.log('p',p);
    switch(week){
        case 'P2-1':
            p.innerHTML =  `<iframe src="./cards_10/p1_10.html" width="100%" height="100%" />`;
            break;
        case 'P2-2':
            p.innerHTML =  `<iframe src="./cards_10/p2_10.html" width="100%" height="100%" />`;
            break;
        
    }
}


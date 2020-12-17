function randomValue ( array ) {
    return Math.floor ( Math.random () * array.length )
}

function generateTalkRubbish ( options  ) {    
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code','來個背景色','給點icon'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計','打個樣'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']      
    }

    const phrase = ['只是幾秒鐘的時間','輕輕鬆鬆','蛤!就這麼一點小事','一片蛋糕','先吃飯再說']

    const collection = ''
    const randomPhrase = randomValue ( phrase ) 

    if ( options === undefined ) {
        return `You must choose one position.`
    }

    if ( options === 'engineer' ) {
        const randomTask =  randomValue ( task.engineer )        
        return ( `工程師 ${task.engineer[randomTask]} ${phrase[randomPhrase]}` )
    } else if ( options === 'designer'  ) {
        const randomTask =  randomValue ( task.designer )
        return( `設計師 ${task.designer[randomTask]} ${phrase[randomPhrase]}` )
    } else if ( options === 'entrepreneur'  ) {
        const randomTask =  randomValue ( task.entrepreneur )
        return ( `企業家 ${task.entrepreneur[randomTask]} ${phrase[randomPhrase]}` )
    }
}

module.exports = generateTalkRubbish
async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const useRealData = false;

    let GME, MSFT, DTS, BTNX;
    if (useRealData) {
        const url = 'https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=84d520490f7c467cb633f00e44d8ed7c';
        const response = await fetch(url, {
            headers: ({'content-type': 'application/json'})
        });
        const myJSON = await response.json();
        console.log(myJSON);
        GME = myJSON.GME;
        MSFT = myJSON.MSFT;
        DIS = myJSON.DIS;
        BNTX = myJSON.BNTX;
    } else {
        GME = mockData.GME;
        MSFT = mockData.MSFT;
        DIS = mockData.DIS;
        BNTX = mockData.BNTX;
    }
    const stocks = [GME, MSFT, DIS, BNTX];

    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.vaalues.map(value => parseFloat(value.high)),
                backgroundColor:  _,
                borderColor: _,
            }))
        }
    });

    console.log(Chart)

    console.log(stocks[0].values)                                                  
}

main()

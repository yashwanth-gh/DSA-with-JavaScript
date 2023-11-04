function analyzeCarMileage(arr) {
    let max = arr[0].mileage;
    let min = arr[0].mileage;
    let tot = 0;
    arr.forEach(car => {
        tot += car.mileage;
        if (car.mileage > max) max = car.mileage;
        if (car.mileage < min) min = car.mileage;
    });
    const highestCar = arr.find((car)=>car.mileage == max)
    const lowestCar = arr.find((car)=>car.mileage == min)
    return {
        averageMileage: tot/arr.length,
        highestMileageCar: highestCar,
        lowestMileageCar: lowestCar,
        totalMileage: tot
    }
}

module.exports = analyzeCarMileage;

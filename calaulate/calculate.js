function calculate(x) {
    const days = 7; 
    const remainingFraction = Math.pow(2/3, days); 
    const y = x * remainingFraction; 
    return y;
}
const initialWater = 5832;
const result = calculate(initialWater);
console.log(`ปริมาณน้ำที่เหลือหลัง 7 วัน: ${result.toFixed(3)} ลิตร`);

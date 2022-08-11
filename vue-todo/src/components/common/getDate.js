export default () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const daylist = ['일', '월', '화', '수', '목', '금', '토'];
    const day = daylist[today.getDay()];
    const time = today.getTime();

    return { year, month, date, day, time };
}
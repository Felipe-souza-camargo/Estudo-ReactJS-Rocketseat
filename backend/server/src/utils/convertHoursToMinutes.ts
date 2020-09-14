export default function convertHoursToMinutes(time: string) {
    //dividir o texto com o split
    const [hour, minutes] = time.split(':').map(Number) //tranforma o texto em numero
    const timeInMinutes = (hour * 60) + minutes;
return timeInMinutes

}
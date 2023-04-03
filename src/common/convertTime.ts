export function convertHoursToSeconds(time:string){
    const [hour = '0', minute = '0', second = '0'] = time.split(':')

    const hourToSeconds = Number(hour) * 3600
    const minuteToSeconds = Number(minute) * 60

    return hourToSeconds + minuteToSeconds + Number(second)
}


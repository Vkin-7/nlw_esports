// 18:00 -> ["18", "00"] -> [18, 00] -> 1080

export function convertHoursStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number);

    return (hours * 60) + minutes;
}

export function convertMinutesToHourString(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
import rows from '../list/table';

interface StatsEntry {
  id: number;           // порядковый номер (1…10)
  group: string;        // например, "san marcos" или "tx" или "us"
  minDuration: number;  // минимальное значение duration (seconds)
  avgDuration: number;  // среднее значение (duration, округлённое до целого)
  maxDuration: number;  // максимальное значение duration (seconds)
}
export type tGroup = {
  id: number;           // порядковый номер (1…10)
  group: string;        // например, "san marcos" или "tx" или "us"
  minDuration: number;  // минимальное значение duration (seconds)
  avgDuration: number;  // среднее значение (duration, округлённое до целого)
  maxDuration: number;
}[];
/**
 * Вспомогательная функция, которая из массива записей вида
 * { city: string; state: string; country: string; "duration (seconds)": number; ... }
 * сгруппирует по ключу keyName и вернёт объект вида:
 * {
 *   [значениеГруппы: string]: {
 *     durations: number[]   // все значения поля duration для данной группы
 *   }
 * }
 */
function groupBy(
  data: Array<{ [key: string]: any; "duration (seconds)": number }>,
  keyName: 'city' | 'state' | 'country'
): Record<string, { durations: number[] }> {
  return data.reduce((acc, record) => {
    const key = record[keyName] || '(empty)';
    // Если поле пустое, запишем в отдельную группу "(empty)"
    if (!acc[key]) {
      acc[key] = { durations: [] };
    }
    acc[key].durations.push(record["duration (seconds)"]);
    return acc;
  }, {} as Record<string, { durations: number[] }>);
}

/**
 * Из массива группировок вида
 * {
 *   [groupValue: string]: { durations: number[] },
 *   …
 * }
 * формирует отсортированный список по groupValue (лексикографически),
 * рассчитывает min, avg, max для durations и возвращает ровно первые 10 элементов
 */
function buildStatsList(
  grouped: Record<string, { durations: number[] }>
): StatsEntry[] {
  // Сначала получим ключи групп (названия городов/штатов/стран) и отсортируем их
  const keys = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  // Возвращаем первые 10 ключей (или меньше, если групп меньше 10)
  return keys.slice(0, 30).map((key, index) => {
    const arr = grouped[key].durations;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((s, x) => s + x, 0);
    const avg = Math.round(sum / arr.length);
    // Округляем среднее до целого (при желании можно оставить дробным)

    return {
      id: index + 1,
      group: key,
      minDuration: min,
      avgDuration: avg,
      maxDuration: max,
    };
  });
}

/**
 * Получить статистику по первым 10 городам (city).
 */
export function getCityStats(): StatsEntry[] {
  const groupedByCity = groupBy(rows, 'city');
  return buildStatsList(groupedByCity);
}

/**
 * Получить статистику по первым 10 штатам (state).
 */
export function getStateStats(): StatsEntry[] {
  const groupedByState = groupBy(rows, 'state');
  return buildStatsList(groupedByState);
}

/**
 * Получить статистику по первым 10 странам (country).
 */
export function getCountryStats(): StatsEntry[] {
  const groupedByCountry = groupBy(rows, 'country');
  return buildStatsList(groupedByCountry);
}

export const countries: tGroup = getStateStats()
export const states: tGroup = getStateStats()
export const cities: tGroup = getStateStats()

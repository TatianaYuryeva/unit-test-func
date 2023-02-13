import getHealthStatus from '../js/get-health-status';

const dataList = [
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
];

const handler = test.each(dataList);

handler('testing getHealthStatus of character %s', (character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});

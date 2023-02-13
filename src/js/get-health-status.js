export default function getHealthStatus(character) {
  let healthStatus;
  if (character.health > 50) {
    healthStatus = 'healthy';
  } else if (character.health >= 15 && character.health <= 50) {
    healthStatus = 'wounded';
  } else if (character.health < 15) {
    healthStatus = 'critical';
  }
  return healthStatus;
}

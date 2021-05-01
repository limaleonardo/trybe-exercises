const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
    
};

const battleMembers = { mage, warrior, dragon };

const mageDamage = () => {
  if (mage.mana < 15) {
    return {damage: 'Não Possui Mana Suficiente', usedMana: 0};
  }
  const dmg = (Math.ceil(Math.random() * mage.intelligence * 2)) + mage.intelligence;
  return {damage: (dmg > (mage.intelligence * 2) ? mage.intelligence * 2 : dmg), usedMana: 15};
};

const warriorDamage =  () => {
  const dmg = (Math.ceil(Math.random() * warrior.strength * warrior.weaponDmg)) + warrior.strength;
  return dmg > (warrior.strength * warrior.weaponDmg) ? dragon.strength : dmg;
};

const dragonDamage =  () => {
  const dmg = (Math.ceil(Math.random() * dragon.strength)) + 15;
  return dmg > dragon.strength ? dragon.strength : dmg;
};

const gameActions = {
  warriorTurn: () => {
    const dmg = warriorDamage();
    warrior.damage = dmg;
    dragon.healthPoints -= dmg;
  },

  mageTurn: () => {
    dmg = mageDamage();
    mage.damage = dmg.damage;
    mage.mana -= dmg.usedMana;
    dragon.healthPoints -= dmg.damage;
  },

  dragonTurn: () => {
    dmg = dragonDamage();
    dragon.damage = dmg;
    mage.healthPoints -= dmg;
    warrior.healthPoints -= dmg;
  },

  turnResults: () => {
    gameActions.warriorTurn();
    gameActions.mageTurn();
    gameActions.dragonTurn();
    console.table(battleMembers);
  },
}

gameActions.turnResults();
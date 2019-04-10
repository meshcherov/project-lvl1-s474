#!/usr/bin/env node

import {
  getName, greet, writeRuleOfGame, evenGame,
} from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

greet();

writeRuleOfGame(rules);

getName();

evenGame();

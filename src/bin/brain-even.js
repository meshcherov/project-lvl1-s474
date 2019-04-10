#!/usr/bin/env node

import {
  getName, greet, writeRuleOfGame, evenGame, greetingUser,
} from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

greet();

writeRuleOfGame(rules);

getName();

greetingUser();

evenGame();

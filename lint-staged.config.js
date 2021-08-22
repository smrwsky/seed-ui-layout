module.exports = {
  'src/**/*.(ts|tsx)': () => ['yarn typecheck', 'yarn lint:quiet'],
};

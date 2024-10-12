import chalk from 'chalk';

export async function showAnimatedMessage(
  message: string,
  duration = 2000,
): Promise<void> {
  const walker = ['🚶', '🚶‍♂️', '🚶‍♀️', '🏃', '🏃‍♂️', '🏃‍♀️'];
  let i = 0;
  const intervalId = setInterval(() => {
    process.stdout.write(`\r${walker[i]} ${chalk.green(message)}`);
    i = (i + 1) % walker.length;
  }, 200);

  await new Promise(resolve => setTimeout(resolve, duration));

  clearInterval(intervalId);
  process.stdout.write(`\r${' '.repeat(message.length + 10)}\r`);
}

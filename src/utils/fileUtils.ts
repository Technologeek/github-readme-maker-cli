import { mkdir } from 'node:fs/promises';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export async function writeReadmeFile(
  content: string,
  outputPath = './README.md',
) {
  const resolvedPath = path.resolve(outputPath);
  try {
    await mkdir(path.dirname(resolvedPath), { recursive: true });
    await fs.writeFile(resolvedPath, content);
  } catch (error) {
    console.error(`Error writing file to ${resolvedPath}:`, error);
    throw error; // Re-throw the error for the caller to handle if needed
  }
}

export function parseKeyValuePairs(
  options: string[] | undefined,
): Record<string, string> {
  const result: Record<string, string> = {};
  if (options) {
    for (const option of options) {
      const [key, value] = option.split(':');
      if (key && value) {
        result[key.trim().toLowerCase()] = value.trim();
      }
    }
  }
  return result;
}

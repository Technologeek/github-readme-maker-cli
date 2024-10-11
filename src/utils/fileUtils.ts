import { mkdir } from 'fs/promises';
import * as fs from 'fs/promises';
import * as path from 'path';

export async function writeReadmeFile(content: string, outputPath: string = './README.md'): Promise<void> {
  const resolvedPath = path.resolve(outputPath);
  try {
    await mkdir(path.dirname(resolvedPath), { recursive: true });
    await fs.writeFile(resolvedPath, content);
  } catch (error) {
    console.error(`Error writing file to ${resolvedPath}:`, error);
    throw error; // Re-throw the error for the caller to handle if needed
  }
}

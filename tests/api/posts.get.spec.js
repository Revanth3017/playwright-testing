import { test, expect } from '@playwright/test';

test('GET /posts returns posts array (limit demo)', async ({ request, baseURL }) => {
  const res = await request.get(`${baseURL}/posts`);
  expect(res.ok()).toBeTruthy();

  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
  // your UI slices to 10; we just assert there are many
  expect(data.length).toBeGreaterThan(10);
  const p = data[0];
  expect(p).toHaveProperty('id');
  expect(p).toHaveProperty('title');
  expect(p).toHaveProperty('body');
});

import { test, expect } from '@playwright/test';

test('POST /posts creates a post (mocked by JSONPlaceholder)', async ({ request, baseURL }) => {
  const payload = { title: 'Playwright Demo', body: 'hello', userId: 1 };
  const res = await request.post(`${baseURL}/posts`, { data: payload });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body).toMatchObject(payload);
  expect(body).toHaveProperty('id'); // placeholder returns a fake id
});

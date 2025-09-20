import { networkDelay } from "@/shared/utils/network-delay/delay.util";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_APP_MOCK_API_URL}:${import.meta.env.VITE_APP_MOCK_API_PORT}`, async () => {
    await networkDelay();
    return HttpResponse.json({ ok: true });
  }),
];
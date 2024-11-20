import { createQueryKeys } from "@lukemorales/query-key-factory";

export const diagnoseKeys = createQueryKeys("diagnose", {
	lists: <T>(params?: T) => [params],
});

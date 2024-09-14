import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { startTransition as reactStartTransition, useTransition } from 'react';

interface UseQueryParamsOptions {
    startTransition?: typeof reactStartTransition;
}

export function useQueryParams({ startTransition: externalStartTransition }: UseQueryParamsOptions = {}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startInternalTransition] = useTransition();
    const startTransition = externalStartTransition || startInternalTransition;
    const createQueryString = useCallback((newParams: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(newParams).forEach(([name, value]) => {
            params.set(name, value);
        });
        return params.toString();
    }, [searchParams]);

    const push = useCallback((newParams: Record<string, string>) => {
        startTransition(() => {
            const newQueryString = createQueryString(newParams);
            window.history.pushState(null, '', `?${newQueryString}`);
            router.push(`?${newQueryString}`);
        });
    }, [router, createQueryString, startTransition]);

    return { push, isPending };
}
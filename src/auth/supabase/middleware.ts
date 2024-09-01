import { paths, ROOTS } from '@/routes/paths';
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  const url = request.nextUrl;

  const isAuthPage = url.pathname.startsWith(ROOTS.AUTH);
  const isAdminPage = url.pathname.startsWith(ROOTS.DASHBOARD);


  if (!isAdminPage && !isAuthPage) {
    return NextResponse.next();
  }


  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );
  const {
    data: { user },
  } = await supabase.auth.getUser();



  if (isAdminPage) {
    if (!user) {
      return NextResponse.redirect(new URL(paths.auth.login, request.url));
    }
    return NextResponse.next();
  }

  if (isAuthPage) {
    if (user) {
      return NextResponse.redirect(new URL(ROOTS.DASHBOARD, request.url));
    }
    return NextResponse.next();
  }

  return supabaseResponse;
}

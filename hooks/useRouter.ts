import { useRouter } from 'next/navigation'

export default function() {
    const router = useRouter();

    const routerPush = (pathname: string) => {
        router.push(pathname);
    };

    return [
        routerPush
    ];
}
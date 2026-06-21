/**
 * package.json name/version/description 접근 단일 출처 (SSOT).
 *
 * 과거 crudHelpers / errorHandler / documentationGenerator 가 각자
 * require('.../package.json') 를 호출하고 서로 다른 fallback(kusto-server vs kusto-api)을
 * 들고 있었다. 로드 실패 시 JSON:API meta.implementation 과 OpenAPI info.title 이 앱 이름을
 * 두고 불일치할 수 있어 한 곳으로 모은다. (webpack 번들 시 inline, dev 는 ts-node require 해석)
 */

export interface PackageInfo {
    name: string;
    version: string;
    description?: string;
}

const FALLBACK: PackageInfo = { name: 'kusto-server', version: '0.0.0' };

/** 첫 성공 로드 결과를 메모이즈(프로세스 수명 동안 1회만 읽음). 실패는 캐시하지 않아 추후 복구 가능. */
let cached: PackageInfo | undefined;

/** package.json 의 name/version/description 을 반환(첫 호출 시 읽고 캐시, 실패 시 단일 fallback, 무로그). */
export function getPackageInfo(): PackageInfo {
    if (cached) return cached;
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg = require('../../../../package.json') as Partial<PackageInfo>;
        cached = {
            name: pkg.name ?? FALLBACK.name,
            version: pkg.version ?? FALLBACK.version,
            description: pkg.description,
        };
        return cached;
    } catch {
        return { ...FALLBACK };
    }
}

/** JSON:API meta.implementation 문자열 ("name v version"). */
export function getImplementationString(): string {
    const { name, version } = getPackageInfo();
    return `${name} v${version}`;
}

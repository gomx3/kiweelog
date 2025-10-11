export const WEBPAGE_INFO = {
    TITLE: 'kiweelog | 김소원 기술 블로그',
    DESCRIPTION: '개발자 김소원의 프로젝트, 기술 학습, 트러블슈팅 여정을 공유하는 블로그',
    LANGUAGE: 'ko-KR',
    IMAGE: '/logo/og.png',
    URL: import.meta.env.RROD_URL,
} as const

export const GISCUS = {
    REPO: import.meta.env.GISCUS_REPO,
    REPO_ID: import.meta.env.GISCUS_REPO_ID,
    CATEGORY: import.meta.env.GISCUS_CATEGORY,
    CATEGORY_ID: import.meta.env.GISCUS_CATEGORY_ID,
} as const

/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="node"/>

import { NextPage } from "next";

type PageProps = NextPage<{ isMobile: boolean }>;

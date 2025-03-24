import { afterEach, vi } from 'vitest';4
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
    vi.clearAllMocks
})
/**
 * Get window size.
 *
 * @returns Object
 */
export function getWindowSize()
{
    const { innerWidth, innerHeight } = window;

    return { innerWidth, innerHeight };
}
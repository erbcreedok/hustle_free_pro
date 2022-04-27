export function getFieldState({ formState, fieldState }) {
    return {
        error: (formState.isSubmitted && fieldState.isTouched && !!fieldState.error) || undefined,
        helpertext: (formState.isSubmitted && fieldState.isTouched && fieldState.error?.message) || undefined
    }
}
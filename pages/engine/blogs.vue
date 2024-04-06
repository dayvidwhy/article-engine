<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { currentArticle } = toRefs(useArticleStore());

const blogSchema = z.object({
    title: z.string().min(1, "Must be at least 1 character").optional(),
    description: z.string().min(1, "Must be at least 1 characters").optional(),
    content: z.string().min(1, "Must be at least 1 characters").optional()
});

async function onSubmit (event: FormSubmitEvent<typeof blogSchema>) {
    const parseResult = blogSchema.safeParse(event.data);
    if (!parseResult.success) {
        return;
    }
    const validData = parseResult.data;
    const data = await $fetch("/api/blog/create", {
        method: "POST",
        body: JSON.stringify({
            title: validData.title || "",
            description: validData.description || "",
            content: validData.content || "",
        })
    });
    await navigateTo({ path: `/publishing/${data.id}` });
}

</script>

<template>
    <div>
        <h1 class="text-4xl text-slate-700">
            Blog Engine
        </h1>
        <h3 class="text-2xl text-slate-600 pt-2">
            Seamlessly construct your next blog
        </h3>
        <div>
            <UForm
                :schema="blogSchema"
                :state="currentArticle"
                :validate-on="['submit']"
                @submit="onSubmit"
            >
                <UFormGroup
                    label="Title"
                    name="title"
                    class="pt-2"
                >
                    <UInput v-model="currentArticle.title" />
                </UFormGroup>
                <UFormGroup
                    label="Description"
                    name="description"
                    class="pt-2"
                >
                    <UInput v-model="currentArticle.description" />
                </UFormGroup>
                <UFormGroup
                    label="Content"
                    name="content"
                    class="pt-2"
                >
                    <UTextarea
                        v-model="currentArticle.content"
                        :rows="22"
                        class="whitespace-pre-line"
                    />
                </UFormGroup>
                <div class="flex pt-2">
                    <UFormGroup class="pr-2">
                        <UButton type="submit">
                            Submit
                        </UButton>
                    </UFormGroup>
                    <UFormGroup>
                        <UButton type="reset">
                            Reset
                        </UButton>
                    </UFormGroup>
                </div>
            </UForm>
        </div>
    </div>
</template>

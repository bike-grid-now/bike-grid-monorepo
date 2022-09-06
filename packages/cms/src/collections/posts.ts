import { buildCollection } from "@camberi/firecms";
import { Post } from "./types";

export const postsCollection = buildCollection<Post>({
	name: "Posts",
	singularName: "Post",
	path: "posts",
	icon: "Book",
	description: "Add a blog post (not yet implemented on the website)",
	group: "Content",
	properties: {
		title: {
			name: "Title",
			dataType: "string",
		},
		body: {
			name: "Body",
			dataType: "string",
			markdown: true,
		},
		createdOn: {
            name: "Created on",
            dataType: "date",
            autoValue: "on_create"
        },
		updatedOn: {
			name: "Updated on",
			dataType: "date",
			autoValue: "on_update"
		}
	}
});

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
		postLink: {
			name: "Post Link",
			dataType: "string",
			validation: { required: true },
			description: "bikegridnow.org/blog/[postLink]",
		},
		title: {
			name: "Title",
			dataType: "string",
		},
		subtitle: {
			name: "Subtitle",
			dataType: "string",
		},
		image: {
			name: "Image",
			dataType: "string",
			description: "Image that will appear at the top of the post",
			storage: {
				storagePath: "images",
				acceptedFiles: ["image/*"],
			},
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

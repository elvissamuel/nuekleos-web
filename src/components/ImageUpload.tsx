"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import { X, Upload as UploadIcon } from "lucide-react";

interface ImageUploadProps {
	value?: string;
	onChange: (url: string) => void;
	disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, disabled }) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const { toast } = useToast();
	const [isUploading, setIsUploading] = useState(false);

	const onPickFile = () => {
		fileInputRef.current?.click();
	};

	const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		if (!file.type.startsWith("image/")) {
			toast({ title: "Invalid file", description: "Please select an image file.", variant: "destructive" });
			return;
		}

		if (file.size > 4 * 1024 * 1024) {
			toast({ title: "File too large", description: "Max size is 4MB.", variant: "destructive" });
			return;
		}

		try {
			setIsUploading(true);
			const blob = await upload(file.name, file, {
				handleUploadUrl: "/api/upload",
				access: "public",
			});
			onChange(blob.url);
			toast({ title: "Uploaded", description: "Image uploaded successfully." });
		} catch (err) {
			console.error("Upload failed", err);
			toast({ title: "Upload failed", description: "Please try again.", variant: "destructive" });
		} finally {
			setIsUploading(false);
			// Reset input value so selecting the same file again triggers change
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};

	const onRemove = () => {
		onChange("");
	};

	return (
		<div className="flex flex-col gap-2">
			{value ? (
				<div className="relative w-full max-w-sm">
					<div className="relative h-40 w-full overflow-hidden rounded border">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={value} alt="Uploaded image" className="h-full w-full object-cover" />
					</div>
					<div className="mt-2 flex gap-2">
						<Button type="button" variant="outline" onClick={onRemove} disabled={disabled || isUploading} className="flex items-center gap-2">
							<X className="h-4 w-4" /> Remove
						</Button>
						<Button type="button" variant="secondary" onClick={onPickFile} disabled={disabled || isUploading} className="flex items-center gap-2">
							<UploadIcon className="h-4 w-4" /> Replace
						</Button>
					</div>
				</div>
			) : (
				<Button type="button" onClick={onPickFile} disabled={disabled || isUploading} className="w-fit flex items-center gap-2">
					<UploadIcon className="h-4 w-4" />
					{isUploading ? "Uploading..." : "Upload Image"}
				</Button>
			)}
			<Input
				ref={fileInputRef}
				type="file"
				accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
				onChange={onFileSelected}
				className="hidden"
				disabled={disabled || isUploading}
			/>
		</div>
	);
};

export default ImageUpload;

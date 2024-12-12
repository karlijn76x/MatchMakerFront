import { describe, it, expect, vi, type Mock } from "vitest";
import { createUserAccount, CompleteUserAccount } from "../API/ApiServiceAccount";

vi.mock("../API/ApiServiceAccount", () => {
    return {
        createUserAccount: vi.fn(),
        CompleteUserAccount: vi.fn(),
    };
});

describe("API Service Account", () => {
    it("should create a user account successfully", async () => {
        const mockUserData = {
            email: "test@example.com",
            passwordHash: "hashedpassword",
            username: "testuser",
            region: "NA",
            rank: "GOLD",
            imageName: "",
            summonerName: "",
        };

        // Typecasting naar Mock
        (createUserAccount as Mock).mockResolvedValue({ id: "123" });

        const result = await createUserAccount(mockUserData);
        expect(result).toEqual({ id: "123" });
        expect(createUserAccount).toHaveBeenCalledWith(mockUserData);
    });

    it("should handle error when creating a user account", async () => {
        const mockUserData = {
            email: "test@example.com",
            passwordHash: "hashedpassword",
            username: "testuser",
            region: "NA",
            rank: "GOLD",
            imageName: "",
            summonerName: "",
        };

        (createUserAccount as Mock).mockRejectedValue(new Error("Failed to create account"));

        await expect(createUserAccount(mockUserData)).rejects.toThrow("Failed to create account");
        expect(createUserAccount).toHaveBeenCalledWith(mockUserData);
    });

    it("should complete a user account successfully", async () => {
        const mockCompleteUserData = {
            id: "123",
            bio: "This is a bio",
            summonerName: "summoner",
            preferences: [
                { roleId: 1, laneId: 1, championId: 1 },
            ],
        };

        (CompleteUserAccount as Mock).mockResolvedValue({});

        await CompleteUserAccount(mockCompleteUserData);
        expect(CompleteUserAccount).toHaveBeenCalledWith(mockCompleteUserData);
    });

    it("should handle error when completing a user account", async () => {
        const mockCompleteUserData = {
            id: "123",
            bio: "This is a bio",
            summonerName: "summoner",
            preferences: [
                { roleId: 1, laneId: 1, championId: 1 },
            ],
        };

        (CompleteUserAccount as Mock).mockRejectedValue(new Error("Failed to complete account"));

        await expect(CompleteUserAccount(mockCompleteUserData)).rejects.toThrow("Failed to complete account");
        expect(CompleteUserAccount).toHaveBeenCalledWith(mockCompleteUserData);
    });
});

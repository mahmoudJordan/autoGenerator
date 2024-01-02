var data = {
  __EFMigrationsHistory: {
    columns: [
      {
        name: "MigrationId",
        type: "nvarchar",
        key: "PRIMARY KEY",
      },
      {
        name: "ProductVersion",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  AccountActivityLogs: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsSuccessed",
        type: "bit",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  AccountGroups: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "GroupId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "GroupId",
        references: {
          table: "Groups",
          column: "Id",
        },
      },
    ],
  },
  Accounts: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "FirstName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "MiddleName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LastName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsBlocked",
        type: "bit",
        key: null,
      },
      {
        name: "BlockedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "BlockedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActivateByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ActivateAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "FileId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsLoggedIn",
        type: "bit",
        key: null,
      },
      {
        name: "UserName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "NormalizedUserName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Email",
        type: "nvarchar",
        key: null,
      },
      {
        name: "NormalizedEmail",
        type: "nvarchar",
        key: null,
      },
      {
        name: "EmailConfirmed",
        type: "bit",
        key: null,
      },
      {
        name: "PasswordHash",
        type: "nvarchar",
        key: null,
      },
      {
        name: "SecurityStamp",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ConcurrencyStamp",
        type: "nvarchar",
        key: null,
      },
      {
        name: "PhoneNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "PhoneNumberConfirmed",
        type: "bit",
        key: null,
      },
      {
        name: "TwoFactorEnabled",
        type: "bit",
        key: null,
      },
      {
        name: "LockoutEnd",
        type: "datetimeoffset",
        key: null,
      },
      {
        name: "LockoutEnabled",
        type: "bit",
        key: null,
      },
      {
        name: "AccessFailedCount",
        type: "int",
        key: null,
      },
      {
        name: "FcmToken",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "FileId",
        references: {
          table: "Files",
          column: "Id",
        },
      },
    ],
  },
  AccountsLocations: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  AccountsRegions: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "RegionId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "RegionId",
        references: {
          table: "Regions",
          column: "Id",
        },
      },
    ],
  },
  AccountsSchools: {
    columns: [
      {
        name: "id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
    ],
  },
  AspNetRoleClaims: {
    columns: [
      {
        name: "Id",
        type: "int",
        key: "PRIMARY KEY",
      },
      {
        name: "RoleId",
        type: "bigint",
        key: null,
      },
      {
        name: "ClaimType",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ClaimValue",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "RoleId",
        references: {
          table: "AspNetRoles",
          column: "Id",
        },
      },
    ],
  },
  AspNetRoles: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "NormalizedName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ConcurrencyStamp",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  AspNetUserClaims: {
    columns: [
      {
        name: "Id",
        type: "int",
        key: "PRIMARY KEY",
      },
      {
        name: "UserId",
        type: "bigint",
        key: null,
      },
      {
        name: "ClaimType",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ClaimValue",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "UserId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  AspNetUserLogins: {
    columns: [
      {
        name: "LoginProvider",
        type: "nvarchar",
        key: "PRIMARY KEY",
      },
      {
        name: "ProviderKey",
        type: "nvarchar",
        key: "PRIMARY KEY",
      },
      {
        name: "ProviderDisplayName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "UserId",
        type: "bigint",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "UserId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  AspNetUserRoles: {
    columns: [
      {
        name: "UserId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "RoleId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "UserId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "RoleId",
        references: {
          table: "AspNetRoles",
          column: "Id",
        },
      },
    ],
  },
  AspNetUserTokens: {
    columns: [
      {
        name: "UserId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "LoginProvider",
        type: "nvarchar",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: "PRIMARY KEY",
      },
      {
        name: "Value",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "UserId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  Companies: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RegionId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "RegionId",
        references: {
          table: "Regions",
          column: "Id",
        },
      },
    ],
  },
  CompaniesLocations: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "CompanyId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "CompanyId",
        references: {
          table: "Companies",
          column: "Id",
        },
      },
    ],
  },
  Configuration: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Key",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Value",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  ContactCustomer: {
    columns: [
      {
        name: "ContactsId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "CustomersId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "ContactsId",
        references: {
          table: "Contacts",
          column: "Id",
        },
      },
      {
        column: "CustomersId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
    ],
  },
  ContactResponsibility: {
    columns: [
      {
        name: "ContactsId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "ResponsibilitiesId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "ContactsId",
        references: {
          table: "Contacts",
          column: "Id",
        },
      },
      {
        column: "ResponsibilitiesId",
        references: {
          table: "Responsibilities",
          column: "Id",
        },
      },
    ],
  },
  Contacts: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "FirstName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LastName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "PrimaryNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "SecondaryNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "EmailAddress",
        type: "nvarchar",
        key: null,
      },
      {
        name: "JobId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ImgDownloadUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ImgId",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "JobId",
        references: {
          table: "Jobs",
          column: "Id",
        },
      },
    ],
  },
  CustomerContacts: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "ContactId",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "ContactId",
        references: {
          table: "Contacts",
          column: "Id",
        },
      },
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
    ],
  },
  CustomerEvent: {
    columns: [
      {
        name: "CustomersId",
        type: "bigint",
        key: null,
      },
      {
        name: "EventsId",
        type: "bigint",
        key: null,
      },
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "CustomersId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "EventsId",
        references: {
          table: "Events",
          column: "Id",
        },
      },
    ],
  },
  Customers: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "WebsiteUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "AdditionalInfo",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "State",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocationsId",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerPhysicalLocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationsId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "CustomerPhysicalLocationId",
        references: {
          table: "PhysicalAddresses",
          column: "Id",
        },
      },
    ],
  },
  CustomerSchools: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
    ],
  },
  DriverAlerts: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "Attention",
        type: "int",
        key: null,
      },
      {
        name: "DriverId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "DriverId",
        references: {
          table: "Drivers",
          column: "EmployeeId",
        },
      },
    ],
  },
  Drivers: {
    columns: [
      {
        name: "EmployeeId",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Company",
        type: "nvarchar",
        key: null,
      },
      {
        name: "HireDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "NewEnglandContract",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Department",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ConnectedExpApp",
        type: "nvarchar",
        key: null,
      },
      {
        name: "JobProfile",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RoutesOptions",
        type: "nvarchar",
        key: null,
      },
      {
        name: "PrimaryHomeAddress",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Supervisor",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "FullLegalName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "JobFamily",
        type: "nvarchar",
        key: null,
      },
      {
        name: "JobTitle",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CompanyHierarchy",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ManagementLevel",
        type: "nvarchar",
        key: null,
      },
      {
        name: "JobFamilyGroup",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ScheduledWeeklyHours",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Region",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "LastSync",
        type: "datetime2",
        key: null,
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  DriverVehicleAssignments: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "DriverId",
        type: "bigint",
        key: null,
      },
      {
        name: "VehicleId",
        type: "bigint",
        key: null,
      },
      {
        name: "CheckIn",
        type: "datetime2",
        key: null,
      },
      {
        name: "CheckOut",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "DriverId",
        references: {
          table: "Drivers",
          column: "EmployeeId",
        },
      },
      {
        column: "VehicleId",
        references: {
          table: "Vehicles",
          column: "Id",
        },
      },
    ],
  },
  EventLocation: {
    columns: [
      {
        name: "EventsId",
        type: "bigint",
        key: null,
      },
      {
        name: "LocationsId",
        type: "bigint",
        key: null,
      },
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "EventsId",
        references: {
          table: "Events",
          column: "Id",
        },
      },
      {
        column: "LocationsId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  EventRegion: {
    columns: [
      {
        name: "EventsId",
        type: "bigint",
        key: null,
      },
      {
        name: "RegionsId",
        type: "bigint",
        key: null,
      },
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "EventsId",
        references: {
          table: "Events",
          column: "Id",
        },
      },
      {
        column: "RegionsId",
        references: {
          table: "Regions",
          column: "Id",
        },
      },
    ],
  },
  Events: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Type",
        type: "int",
        key: null,
      },
      {
        name: "StartDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "EndDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsEmailNotificationOn",
        type: "bit",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  EventSchool: {
    columns: [
      {
        name: "EventsId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolsId",
        type: "bigint",
        key: null,
      },
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
    ],
    foreignKeys: [
      {
        column: "EventsId",
        references: {
          table: "Events",
          column: "Id",
        },
      },
      {
        column: "SchoolsId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
    ],
  },
  Files: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "FileUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "FileName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "FileSize",
        type: "bigint",
        key: null,
      },
      {
        name: "FireBaseRootPath",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Extension",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  GroupPermissions: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "GroupId",
        type: "bigint",
        key: null,
      },
      {
        name: "PermissionId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "GroupId",
        references: {
          table: "Groups",
          column: "Id",
        },
      },
      {
        column: "PermissionId",
        references: {
          table: "PermissionsLists",
          column: "Id",
        },
      },
    ],
  },
  Groups: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "PortalType",
        type: "int",
        key: null,
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  GuardiansStudents: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "StudentId",
        type: "bigint",
        key: null,
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "StudentId",
        references: {
          table: "Students",
          column: "Id",
        },
      },
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  IncidentReportActivityLogs: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IncidentId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "IncidentId",
        references: {
          table: "Incidents",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  IncidentReportNotes: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IncidentReportId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "IncidentReportId",
        references: {
          table: "Incidents",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  Incidents: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "RouteNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IncidentDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "IncidentDescription",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IncidentType",
        type: "bigint",
        key: null,
      },
      {
        name: "RepeatOffender",
        type: "int",
        key: null,
      },
      {
        name: "StudentId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "DriverId",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "Attention",
        type: "int",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "DistrictNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "StudentId",
        references: {
          table: "Students",
          column: "Id",
        },
      },
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
      {
        column: "DriverId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  Jobs: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  LocationDevices: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "Latitude",
        type: "float",
        key: null,
      },
      {
        name: "Longitude",
        type: "float",
        key: null,
      },
      {
        name: "FullAddress",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  Locations: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RegionId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ReferenceId",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "RegionId",
        references: {
          table: "Regions",
          column: "Id",
        },
      },
    ],
  },
  Lookups: {
    columns: [
      {
        name: "Id",
        type: "int",
        key: "PRIMARY KEY",
      },
      {
        name: "UniqueId",
        type: "int",
        key: null,
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Type",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  PermissionGroups: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "ParentId",
        type: "bigint",
        key: null,
      },
      {
        name: "UniqueId",
        type: "bigint",
        key: null,
      },
      {
        name: "PortalType",
        type: "int",
        key: null,
      },
      {
        name: "Title",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "OrderId",
        type: "int",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "ParentId",
        references: {
          table: "PermissionGroups",
          column: "Id",
        },
      },
    ],
  },
  PermissionsLists: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "UniqueId",
        type: "bigint",
        key: null,
      },
      {
        name: "ParentId",
        type: "bigint",
        key: null,
      },
      {
        name: "PermissionGroupId",
        type: "bigint",
        key: null,
      },
      {
        name: "Type",
        type: "tinyint",
        key: null,
      },
      {
        name: "Title",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "IsChildDependant",
        type: "bit",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "ParentId",
        references: {
          table: "PermissionsLists",
          column: "Id",
        },
      },
      {
        column: "PermissionGroupId",
        references: {
          table: "PermissionGroups",
          column: "Id",
        },
      },
    ],
  },
  PhysicalAddresses: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "FullAddress",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Latitude",
        type: "float",
        key: null,
      },
      {
        name: "Longitude",
        type: "float",
        key: null,
      },
      {
        name: "City",
        type: "nvarchar",
        key: null,
      },
      {
        name: "State",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ZipCode",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Country",
        type: "nvarchar",
        key: null,
      },
      {
        name: "County",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Street1",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Street2",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Type",
        type: "nvarchar",
        key: null,
      },
      {
        name: "GoogleId",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CustomLatitude",
        type: "float",
        key: null,
      },
      {
        name: "CustomLongitude",
        type: "float",
        key: null,
      },
      {
        name: "TimeZoneId",
        type: "bigint",
        key: null,
      },
      {
        name: "Unit",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "TimeZoneId",
        references: {
          table: "TimeZones",
          column: "Id",
        },
      },
    ],
  },
  Regions: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "FileId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "FileId",
        references: {
          table: "Files",
          column: "Id",
        },
      },
    ],
  },
  Responsibilities: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  RideCancelationRequest: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "RideType",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "EndDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "StartDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "StudentId",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "GuardianId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "StudentId",
        references: {
          table: "Students",
          column: "Id",
        },
      },
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "GuardianId",
        references: {
          table: "GuardiansStudents",
          column: "Id",
        },
      },
    ],
  },
  RoutingRequests: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "ActionType",
        type: "bigint",
        key: null,
      },
      {
        name: "RoutingType",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "StartDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "EndDate",
        type: "datetime2",
        key: null,
      },
      {
        name: "StudentFirstName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "StudentLastName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Attention",
        type: "int",
        key: null,
      },
      {
        name: "SASID",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Grade",
        type: "bigint",
        key: null,
      },
      {
        name: "RequestPhysicalAddressId",
        type: "bigint",
        key: null,
      },
      {
        name: "SpecialInstructions",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "FileId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
      {
        column: "RequestPhysicalAddressId",
        references: {
          table: "PhysicalAddresses",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "FileId",
        references: {
          table: "Files",
          column: "Id",
        },
      },
    ],
  },
  RoutingRequestsActivityLogs: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RoutingRequestId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "RoutingRequestId",
        references: {
          table: "RoutingRequests",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  RoutingRequestsNotes: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RoutingRequestId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "RoutingRequestId",
        references: {
          table: "RoutingRequests",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  Schools: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "WebsiteUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "AdditionalInfo",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocationsId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolPhysicalLocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationsId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "SchoolPhysicalLocationId",
        references: {
          table: "PhysicalAddresses",
          column: "Id",
        },
      },
    ],
  },
  Students: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "FirstName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LastName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "SASID",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LASID",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "PhysicalAddressId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Grade",
        type: "int",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
      {
        column: "PhysicalAddressId",
        references: {
          table: "PhysicalAddresses",
          column: "Id",
        },
      },
    ],
  },
  TimeZones: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "GoogleTimeZoneId",
        type: "nvarchar",
        key: null,
      },
      {
        name: "TimeZoneName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Abbreviation",
        type: "nvarchar",
        key: null,
      },
      {
        name: "RawOffsetInSeconds",
        type: "int",
        key: null,
      },
      {
        name: "DstOffsetInSeconds",
        type: "int",
        key: null,
      },
    ],
    foreignKeys: [],
  },
  Tools: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Name",
        type: "nvarchar",
        key: null,
      },
      {
        name: "PublicUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LogoImageFileId",
        type: "bigint",
        key: null,
      },
      {
        name: "IconImageFileId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LogoImageFileId",
        references: {
          table: "Files",
          column: "Id",
        },
      },
      {
        column: "IconImageFileId",
        references: {
          table: "Files",
          column: "Id",
        },
      },
    ],
  },
  ToolsGroupPermission: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "GroupId",
        type: "bigint",
        key: null,
      },
      {
        name: "PermissionId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "GroupId",
        references: {
          table: "Groups",
          column: "Id",
        },
      },
      {
        column: "PermissionId",
        references: {
          table: "ToolsPermissionsList",
          column: "Id",
        },
      },
    ],
  },
  ToolsLocationsUrls: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "ToolsSpecificUrlId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "ToolsSpecificUrlId",
        references: {
          table: "ToolsSpecificUrls",
          column: "Id",
        },
      },
    ],
  },
  ToolsPermissionsList: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "tinyint",
        key: null,
      },
      {
        name: "IsChildDependant",
        type: "bit",
        key: null,
      },
      {
        name: "ToolId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "ToolId",
        references: {
          table: "Tools",
          column: "Id",
        },
      },
    ],
  },
  ToolsSpecificUrls: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Link",
        type: "nvarchar",
        key: null,
      },
      {
        name: "ToolId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "ToolId",
        references: {
          table: "Tools",
          column: "Id",
        },
      },
    ],
  },
  UsersNotifications: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Title",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "AccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "Date",
        type: "datetime2",
        key: null,
      },
      {
        name: "Time",
        type: "time",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "perantId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "AccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  Vehicles: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Capacity",
        type: "int",
        key: null,
      },
      {
        name: "CorporateAssetNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocalVehicleNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "VehicleType",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VinNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Year",
        type: "int",
        key: null,
      },
      {
        name: "WheelChairWheelCapacity",
        type: "int",
        key: null,
      },
      {
        name: "LytxId",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Category",
        type: "nvarchar",
        key: null,
      },
      {
        name: "MaintenanceStatus",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VehicleStatus",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
    ],
  },
  VideoRequests: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "RouteNumber",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Date",
        type: "datetime2",
        key: null,
      },
      {
        name: "StartTime",
        type: "time",
        key: null,
      },
      {
        name: "EndTime",
        type: "time",
        key: null,
      },
      {
        name: "Description",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Status",
        type: "bigint",
        key: null,
      },
      {
        name: "Attention",
        type: "int",
        key: null,
      },
      {
        name: "CustomerId",
        type: "bigint",
        key: null,
      },
      {
        name: "LocationId",
        type: "bigint",
        key: null,
      },
      {
        name: "SchoolId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideosExpiaryDate",
        type: "datetime2",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "CustomerId",
        references: {
          table: "Customers",
          column: "Id",
        },
      },
      {
        column: "LocationId",
        references: {
          table: "Locations",
          column: "Id",
        },
      },
      {
        column: "SchoolId",
        references: {
          table: "Schools",
          column: "Id",
        },
      },
    ],
  },
  VideoRequestsActivityLogs: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Type",
        type: "bigint",
        key: null,
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideoRequestId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "VideoRequestId",
        references: {
          table: "VideoRequests",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  VideoRequestsNotes: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "Note",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideoRequestId",
        type: "bigint",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "VideoRequestId",
        references: {
          table: "VideoRequests",
          column: "Id",
        },
      },
      {
        column: "CreatedByAccountId",
        references: {
          table: "Accounts",
          column: "Id",
        },
      },
    ],
  },
  Videos: {
    columns: [
      {
        name: "Id",
        type: "bigint",
        key: "PRIMARY KEY",
      },
      {
        name: "VideoUrl",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideoName",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideoSize",
        type: "bigint",
        key: null,
      },
      {
        name: "FireBaseRootPath",
        type: "nvarchar",
        key: null,
      },
      {
        name: "Extension",
        type: "nvarchar",
        key: null,
      },
      {
        name: "CreatedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "CreatedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "ModifiedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ModifiedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsDeleted",
        type: "bit",
        key: null,
      },
      {
        name: "DeletedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "DeletedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsActive",
        type: "bit",
        key: null,
      },
      {
        name: "ActiveAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ActiveByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "IsArchived",
        type: "bit",
        key: null,
      },
      {
        name: "ArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "ArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedAtUtc",
        type: "datetime2",
        key: null,
      },
      {
        name: "UnArchivedByAccountId",
        type: "bigint",
        key: null,
      },
      {
        name: "UnArchivedNote",
        type: "nvarchar",
        key: null,
      },
      {
        name: "VideoOrder",
        type: "int",
        key: null,
      },
      {
        name: "VideoRequestId",
        type: "bigint",
        key: null,
      },
    ],
    foreignKeys: [
      {
        column: "VideoRequestId",
        references: {
          table: "VideoRequests",
          column: "Id",
        },
      },
    ],
  },
};

import axios from "axios";
import ModBlock from "./ModBlock";
import styles from "./Builder.module.scss"

export default function OLNBuilder() {
  let mods: string[] = ["minecraft", "nei", "baubles"];

  function download() {
    axios
      .post("/api/OLN/build", { mods }, { responseType: "blob" })
      .then((response) => {
        const href = URL.createObjectURL(response.data);
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "OLN.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  }

  function addMod(name: string) {
    mods = [...mods, name];
  }

  function removeMod(name: string) {
    mods = mods.filter((mod) => mod != name);
  }

  const modsBlocks: {
    nameDisplay: string;
    iconUrl: string;
    modFolder: string;
  }[] = [
    { nameDisplay: "Aether Legacy", modFolder: "aether", iconUrl:"https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/1/1b/%D0%91%D0%B5%D0%BB%D0%BE%D0%B5_%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE_%28Aether%29.png/revision/latest?cb=20121127114913" },
    { nameDisplay: "Blood Magic", modFolder: "alchemicalwizardry", iconUrl:"https://raw.githubusercontent.com/FaetterP/OLN/Full/assets/alchemicalwizardry/textures/items/SacrificialDagger.png" },
    { nameDisplay: "Alfheim", modFolder: "alfheim", iconUrl: "https://raw.githubusercontent.com/FaetterP/OLN/Full/assets/alfheim/textures/items/ManaStone.png" },
    { nameDisplay: "Ars Magica 2",  modFolder: "arsmagica2", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/arsmagica2/textures/item/vinteum_dust.png?raw=true" },
    { nameDisplay: "Automagy", modFolder: "automagy", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/automagy/textures/items/focusCrafting.png?raw=true" },
    { nameDisplay: "Betweenlands", modFolder: "betweenlands", iconUrl: "https://static.wikia.nocookie.net/the-betweenlands/images/f/ff/BigSwiftPick.png/revision/latest?cb=20211108000318" },
    { nameDisplay: "Blood Arsenal", modFolder: "bloodarsenal", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/bloodarsenal/textures/items/amorphic_catalyst.png?raw=true" },
    { nameDisplay: "Botania",  modFolder: "botania", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/botania/textures/blocks/daybloom.png?raw=true" },
    { nameDisplay: "Botanical Addons",  modFolder: "Botanical Addons", iconUrl: "https://ftbwiki.org/images/6/69/Item_Crysanthermum.png" },
    { nameDisplay: "Divine RPG", modFolder: "divinerpg", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/divinerpg/textures/items/skythernSoul.png?raw=true" },
    { nameDisplay: "Forbidden Magic", modFolder: "forbidden", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/forbidden/textures/items/chameleonpick.png?raw=true" },
    { nameDisplay: "Gadomancy",  modFolder: "gadomancy" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/gadomancy/textures/items/golem_silverwood.png?raw=true"},
    { nameDisplay: "Nodal Mechanics", modFolder: "Nodal Mechanics", iconUrl: "https://ftbwiki.org/images/5/54/Grid_Attuned_Node_Matrix.png" },
    { nameDisplay: "Tainted Magic", modFolder: "taintedmagic", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/taintedmagic/textures/items/ItemFocusMageMace.png?raw=true" },
    { nameDisplay: "Thaumcraft 4",  modFolder: "thaumcraft" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/thaumcraft/textures/items/nitor.png?raw=true"},
    { nameDisplay: "Thaumic Additions",  modFolder: "Thaumic Additions" , iconUrl: "https://ftbwiki.org/images/8/82/Item_Auro_meter.gif"},
    { nameDisplay: "Thaumic Bases",  modFolder: "Thaumic Bases" , iconUrl: "https://ftbwiki.org/images/9/9d/Item_Bloody_Enchanted_Fabric.png"},
    { nameDisplay: "Thaumic Dyes",  modFolder: "thaumicdyes" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/thaumicdyes/textures/items/maskEvil.png?raw=true"},
    { nameDisplay: "Thaumic Exploration", modFolder: "thaumicexploration", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/thaumicexploration/textures/items/bootsMeteor.png?raw=true" },
    { nameDisplay: "Thaumic Horizons",  modFolder: "thaumichorizons" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/thaumichorizons/textures/items/diamondskin.png?raw=true"},
    { nameDisplay: "Thaumic Tinkerer",  modFolder: "ttinkerer" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/ttinkerer/textures/items/ichorPick.png?raw=true"},
    { nameDisplay: "Thaumic Revelations",  modFolder: "Thaumic Revelations" , iconUrl: "https://ftbwiki.org/images/f/f5/Item_Warden%27s_Chestplate.png"},
    { nameDisplay: "Twilight Forest",  modFolder: "twilightforest" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/twilightforest/textures/items/chainBlock.png?raw=true"},
    { nameDisplay: "Witchery", modFolder: "witchery" , iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/witchery/textures/items/ingredient.mutandis.png?raw=true"},
    { nameDisplay: "Witching Gadgets", modFolder: "witchinggadgets", iconUrl: "https://github.com/FaetterP/OLN/blob/Full/assets/witchinggadgets/textures/items/bag.png?raw=true" },
   
    { nameDisplay: "Advanced Solar Panels", modFolder: "advancedsolarpanel", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/advancedsolarpanel/textures/items/HybridSolarHelmet.png?raw=true" },
    { nameDisplay: "Applied Energistics 2", modFolder: "appliedenergistics2", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/appliedenergistics2/textures/items/ItemMaterial.Cell64kPart.png?raw=true" },
    { nameDisplay: "AE2 Stuff", modFolder: "AE2 Stuff", iconUrl: "https://ftbwiki.org/images/4/42/Item_Wireless_Setup_Kit.png" },
    { nameDisplay: "Big Reactors", modFolder: "bigreactors", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/bigreactors/textures/items/ingotGraphite.png?raw=true" },
    { nameDisplay: "CompactSolars", modFolder: "CompactSolars", iconUrl: "https://ftbwiki.org/images/e/e2/Block_High_Voltage_Solar_Array.png" },
    { nameDisplay: "ComputerCraft", modFolder: "ComputerCraft", iconUrl: "https://ftbwiki.org/images/thumb/0/07/Iso_Computer.png/375px-Iso_Computer.png" },
    { nameDisplay: "EnderIO", modFolder: "enderio", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/enderio/textures/items/vibrantCrystal.png?raw=true" },
    { nameDisplay: "EvilCraft", modFolder: "EvilCraft", iconUrl: "https://evilcraft.rubensworks.net/book/assets/icons/evilcraft__dark_gem.png" },
    { nameDisplay: "Extra Cells", modFolder: "extracells", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/extracells/textures/items/storage.component.fluid.16384k.png?raw=true" },
    { nameDisplay: "Extra Utilities", modFolder: "extrautils", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/extrautils/textures/items/unstableingot.png?raw=true" },
    { nameDisplay: "Forestry", modFolder: "forestry", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/forestry/textures/items/frameImpregnated.png?raw=true" },
    { nameDisplay: "Gendustry", modFolder: "gendustry", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/gendustry/textures/items/grafter.png?raw=true" },
    { nameDisplay: "Gravitation Suite", modFolder: "gravisuite", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/gravisuite/textures/items/itemVajra.png?raw=true" },
    { nameDisplay: "GregTech 5", modFolder: "GregTech 5", iconUrl: "https://ftbwiki.org/images/4/4a/Item_Processor_Assembly.png" },
    { nameDisplay: "Industrial Craft 2", modFolder: "ic2", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/ic2/textures/items/itemArmorNanoChestplate.png?raw=true" },
    { nameDisplay: "Immersive Engineering", modFolder: "immersiveengineering", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/immersiveengineering/textures/items/coil_copper.png?raw=true" },
    { nameDisplay: "Immersive Integration", modFolder: "Immersive Integration", iconUrl: "" },
    { nameDisplay: "Mekanism", modFolder: "mekanism", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/mekanism/textures/items/ReinforcedAlloy.png?raw=true" },
    { nameDisplay: "MineFactory Reloaded", modFolder: "minefactoryreloaded", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/minefactoryreloaded/textures/items/item.mfr.meat.ingot.raw.png?raw=true" },
    { nameDisplay: "Nuclear Control", modFolder: "nuclearcontrol", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/nuclearcontrol/textures/blocks/infoPanel/on/12/12.png?raw=true" },
    { nameDisplay: "OpenBlocks", modFolder: "OpenBlocks", iconUrl: "https://ftbwiki.org/images/7/7b/Item_Hang_Glider.png" },
    { nameDisplay: "Project Red", modFolder: "projectred", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/projectred/textures/items/base/silicon.png?raw=true" },
    { nameDisplay: "QuantumFlux", modFolder: "quantumflux", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/quantumflux/textures/items/zbq7.png?raw=true" },
    { nameDisplay: "Railcraft", modFolder: "Railcraft", iconUrl: "https://ftbwiki.org/images/7/75/Item_Tin_Plate_%28Railcraft%29.png" },
    { nameDisplay: "RFTools", modFolder: "rftools", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/rftools/textures/items/dimletTemplateItem.png?raw=true" },
    { nameDisplay: "Simply Jetpacks", modFolder: "simplyjetpacks", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/simplyjetpacks/textures/items/armorFluxPlate.png?raw=true" },
    { nameDisplay: "Thermal Dynamics", modFolder: "thermaldynamics", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/thermaldynamics/textures/items/servo0.png?raw=true" },
    { nameDisplay: "Thermal Expansion", modFolder: "thermalexpansion", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/thermalexpansion/textures/items/material/Slag.png?raw=true" },
    { nameDisplay: "Thermal Foundation", modFolder: "thermalfoundation", iconUrl: "https://github.com/FaetterP/OLN/blob/HiTech/assets/thermalfoundation/textures/items/material/CrystalCinnabar.png?raw=true" },
    
    { nameDisplay: "Arcane Engineering", modFolder: "arcane_engineering", iconUrl: "https://github.com/FaetterP/OLN/blob/TechnoMagic/assets/arcane_engineering/textures/items/drillhead_thaumium.png?raw=true" },
    { nameDisplay: "Draconic Evolution", modFolder: "draconicevolution", iconUrl: "https://github.com/FaetterP/OLN/blob/TechnoMagic/assets/draconicevolution/textures/items/draconicIngot.png?raw=true" },
    { nameDisplay: "Electro-Magic Tools", modFolder: "emt", iconUrl: "https://github.com/FaetterP/OLN/blob/TechnoMagic/assets/emt/textures/items/materials/thaumiumplate.png?raw=true" },
    { nameDisplay: "EssentialCraft", modFolder: "EssentialCraft", iconUrl: "https://ftbwiki.org/images/4/4e/Item_Elemental_Gem.png" },
    { nameDisplay: "Essential Thaumaturgy", modFolder: "Essential Thaumaturgy", iconUrl: "https://ftbwiki.org/images/c/c6/Item_MRU_Wand_Cap_%28Inert%29.png" },
    { nameDisplay: "Magic Bees", modFolder: "magicbees", iconUrl: "https://github.com/FaetterP/OLN/blob/TechnoMagic/assets/magicbees/textures/items/essenceLife.png?raw=true" },
    { nameDisplay: "Thaumic Energistics", modFolder: "thaumicenergistics", iconUrl: "https://github.com/FaetterP/OLN/blob/TechnoMagic/assets/thaumicenergistics/textures/items/storage.component.4k.png?raw=true" },
    
    { nameDisplay: "AgriCraft", modFolder: "agricraft", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/agricraft/textures/items/cropsItem.png?raw=true" },
    { nameDisplay: "AOBD", modFolder: "aobd", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/aobd/textures/items/dust.png?raw=true" },
    { nameDisplay: "Avaritia", modFolder: "avaritia", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/avaritia/textures/items/resource_neutron_pile.png?raw=true" },
    { nameDisplay: "BiblioCraft", modFolder: "bibliocraft", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/bibliocraft/textures/items/monocle.png?raw=true" },
    { nameDisplay: "Biomes O' Plenty", modFolder: "biomesoplenty", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/biomesoplenty/textures/items/amethyst.png?raw=true" },
    { nameDisplay: "Carpenter's Blocks", modFolder: "carpentersblocks", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/carpentersblocks/textures/items/chisel.png?raw=true" },
    { nameDisplay: "Chisel", modFolder: "chisel", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/chisel/textures/items/chisel_iron.png?raw=true" },
    { nameDisplay: "Ex Nihilo", modFolder: "exnihilo", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/exnihilo/textures/items/HammerIron.png?raw=true" },
    { nameDisplay: "ExtrabiomesXL", modFolder: "extrabiomesxl", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/extrabiomesxl/textures/items/cattail.png?raw=true" },
    { nameDisplay: "ExtraTiC", modFolder: "extratic", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/extratic/textures/items/axe/botania/elementium_axe_head.png?raw=true" },
    { nameDisplay: "Hardcore Ender Expansion", modFolder: "Hardcore Ender Expansion", iconUrl: "https://ftbwiki.org/images/1/1c/Item_Dragon_Essence.png" },
    { nameDisplay: "Pam's HarvestCraft", modFolder: "harvestcraft", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/harvestcraft/textures/items/baklavaItem.png?raw=true" },
    { nameDisplay: "Iron Backpacks", modFolder: "ironbackpacks", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/ironbackpacks/textures/items/upgrade_latch.png?raw=true" },
    { nameDisplay: "Iron Chests", modFolder: "ironchest", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/ironchest/textures/items/diamondCrystalUpgrade.png?raw=true" },
    { nameDisplay: "Magical Crops", modFolder: "magicalcrops", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/magicalcrops/textures/items/MagicEssence_Zivicio.png?raw=true" },
    { nameDisplay: "Natura", modFolder: "natura", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/natura/textures/items/barley_plant.png?raw=true" },
    { nameDisplay: "Netherlicious", modFolder: "netherlicious", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/netherlicious/textures/items/crystal_shard_white.png?raw=true" },
    { nameDisplay: "Nether Ores", modFolder: "netherores", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/netherores/textures/blocks/Diamond.png?raw=true" },
    { nameDisplay: "Storage Drawers", modFolder: "storagedrawers", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/storagedrawers/textures/items/tape_roll.png?raw=true" },
    { nameDisplay: "StorageDrawersBop", modFolder: "storagedrawersbop", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/storagedrawersbop/textures/blocks/drawers_cherry_side.png?raw=true" },
    { nameDisplay: "TerraFirmaCraft", modFolder: "terrafirmacraft", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/terrafirmacraft/textures/items/gems/Chipped%20Agate.png?raw=true" },
    { nameDisplay: "Tinkers' Construct", modFolder: "tinker", iconUrl: "https://github.com/FaetterP/OLN/blob/Other/assets/tinker/textures/items/achievementIcons/proTinkerer.png?raw=true" },
    { nameDisplay: "Traveller's Gear", modFolder: "Traveller's Gear", iconUrl: "" },
  ];

  return (
    <div className="wrapper">
      <div className={styles.list}>
      {modsBlocks.map((info) => (
        <ModBlock
          key={info.modFolder}
          
          nameDisplay={info.nameDisplay}
          iconUrl={info.iconUrl}
          modFolder={info.modFolder}
          addMod={addMod}
          removeMod={removeMod}
        />
      ))}
      </div>
      <button className={styles.downloadButton} onClick={download}>Скачать</button>
    </div>
  );
}

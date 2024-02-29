"use client";
import { Button } from "@/components/Button";
import ColorPicker from "@/components/ColorPicker";
import SettingsSection from "@/components/Settings/SettingsSection";
import Toggle from "@/components/Toggle";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("swift-purple"); // Color predeterminado

  useEffect(() => {
    applyTheme();
  }, [darkMode]);


  const applyTheme = () =>
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  
  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">App Settings</h2>

      {/* Sección Dark Mode */}
      <SettingsSection
        title="Dark Mode"
        description="Activate dark mode for a different visual experience."
      >
        <Toggle value={darkMode} onChange={handleDarkModeToggle} />
      </SettingsSection>

      {/* Sección Color Picker */}
      <div className="mt-8">
        <SettingsSection title="Theme Color">
          <ColorPicker
          />
        </SettingsSection>
      </div>

      {/* Otras Secciones de Configuración */}
      {/* ... Agregar más secciones según sea necesario */}

      <div className="mt-4">
        <Button onClick={() => alert("Configuración guardada")}>
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
